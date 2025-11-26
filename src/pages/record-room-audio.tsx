/** biome-ignore-all lint/suspicious/noConsole: <Testing> */

import { ArrowLeft, Paperclip, Pause } from 'lucide-react'
import { type ChangeEvent, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRooms } from '@/http/use-room'

type RoomParams = {
  roomId: string
}

/**
 * Indica se o ambiente do navegador atual suporta recursos de gravação de áudio.
 *
 * Esta variável verifica a existência do objeto `navigator.mediaDevices`,
 * garante que o método `getUserMedia` está disponível para acessar dispositivos de entrada de mídia,
 * e verifica se a API `MediaRecorder` está implementada como uma função.
 * Retorna `true` se todas as APIs necessárias forem suportadas, caso contrário retorna `false`.
 */

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const recorder = useRef<MediaRecorder | null>(null)
  const params = useParams<RoomParams>()
  const { data } = useRooms()
  const intervalRef = useRef<NodeJS.Timeout>(null)

  const currentRoom = data?.find((room) => room.id === params.roomId)

  function stopRecording() {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  async function uploadFile(file: File) {
    const formData = new FormData()

    formData.append('file', file)

    setIsUploading(true)

    try {
      const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/file`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar o arquivo')
      }

      const result = await response.json()

      console.log('Upload successful:', result)

      return result
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Falha ao enviar o arquivo. Por favor, tente novamente.')
    }
  }

  function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    uploadFile(file)
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData()

    formData.append('file', audio, 'audio.webm')

    const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()

    console.log(result)
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data)
      }
    }

    recorder.current.onstart = () => {
      console.log('Gravação iniciada')
    }

    recorder.current.onstop = () => {
      console.log('Gravação Pausada')
    }

    recorder.current.start()
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('A gravação de áudio não é suportada neste navegador.')

      return
    }

    setIsRecording(true)

    /**
     * Solicita permissão ao usuário para acessar o microfone e retorna um stream de áudio.
     *
     * As opções de áudio incluem:
     * - `echoCancellation`: Ativa o cancelamento de eco para melhorar a qualidade do áudio.
     * - `noiseSuppression`: Ativa a supressão de ruído para reduzir ruídos de fundo.
     * - `sampleRate`: Define a taxa de amostragem do áudio para 44.100 Hz.
     *
     * @returns {Promise<MediaStream>} Uma Promise que resolve para o stream de áudio capturado.
     * @throws {DOMException} Caso o usuário negue a permissão ou ocorra algum erro ao acessar o microfone.
     */

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    createRecorder(audio)

    intervalRef.current = setInterval(() => {
      recorder.current?.stop()
      createRecorder(audio)
    }, 10_000)
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto flex h-screen max-w-4xl flex-col px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 font-bold text-3xl text-foreground">Conteúdo - {currentRoom?.name}</h1>
            <p className="text-muted-foreground">Grave a aula ou realize o anexo de documento referente a aula.</p>
          </div>

          <Link to={`/room/${params.roomId}`}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 ">
          {isRecording ? (
            <Button onClick={stopRecording} variant={'destructive'}>
              <Pause className="bold animate-pulse" />
              Pausar Gravação
            </Button>
          ) : (
            <Button onClick={startRecording}>Gravar Audio</Button>
          )}
          {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}

          <label htmlFor="file-upload">
            <Button asChild>
              <span>
                <Paperclip className="bold" />
                {isUploading ? 'Enviando...' : 'Anexar Documento'}
              </span>
            </Button>
          </label>
          <Input
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            disabled={isUploading}
            id="file-upload"
            onChange={handleFileUpload}
            type="file"
          />
        </div>
      </div>
    </div>
  )
}
