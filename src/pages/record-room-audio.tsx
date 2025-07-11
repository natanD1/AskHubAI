/** biome-ignore-all lint/suspicious/noConsole: <Testing> */

import { Pause } from 'lucide-react'
import { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'

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

  const recorder = useRef<MediaRecorder | null>(null)

  const params = useParams<RoomParams>()

  function stopRecording() {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }
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

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording} variant={'destructive'}>
          <Pause className="bold" />
          Pausar Gravação
        </Button>
      ) : (
        <Button onClick={startRecording}>Gravar Audio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}
