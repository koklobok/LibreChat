import { useState, useEffect } from 'react';
import useSpeechToTextBrowser from './useSpeechToTextBrowser';
import useSpeechToTextExternal from './useSpeechToTextExternal';
import useGetAudioSettings from './useGetAudioSettings';

const useSpeechToText = (handleTranscriptionComplete: (text: string) => void) => {
  const { useExternalSpeechToText } = useGetAudioSettings();
  const [animatedText, setAnimatedText] = useState('');

  const {
    isListening: speechIsListeningBrowser,
    isLoading: speechIsLoadingBrowser,
    interimTranscript: interimTranscriptBrowser,
    text: speechTextBrowser,
    startRecording: startSpeechRecordingBrowser,
    stopRecording: stopSpeechRecordingBrowser,
  } = useSpeechToTextBrowser();

  const {
    isListening: speechIsListeningExternal,
    isLoading: speechIsLoadingExternal,
    text: speechTextExternal,
    externalStartRecording: startSpeechRecordingExternal,
    externalStopRecording: stopSpeechRecordingExternal,
    clearText,
  } = useSpeechToTextExternal(handleTranscriptionComplete);

  const isListening = useExternalSpeechToText
    ? speechIsListeningExternal
    : speechIsListeningBrowser;
  const isLoading = useExternalSpeechToText ? speechIsLoadingExternal : speechIsLoadingBrowser;
  const speechTextForm = useExternalSpeechToText ? speechTextExternal : speechTextBrowser;
  const startRecording = useExternalSpeechToText
    ? startSpeechRecordingExternal
    : startSpeechRecordingBrowser;
  const stopRecording = useExternalSpeechToText
    ? stopSpeechRecordingExternal
    : stopSpeechRecordingBrowser;
  const speechText =
    isListening || (speechTextExternal && speechTextExternal.length > 0)
      ? speechTextExternal
      : speechTextForm || '';
  // for a future real-time STT external
  const interimTranscript = useExternalSpeechToText ? '' : interimTranscriptBrowser;

  const animateTextTyping = (text: string) => {
    const totalDuration = 2000;
    const frameRate = 60;
    const totalFrames = totalDuration / (1000 / frameRate);
    const charsPerFrame = Math.ceil(text.length / totalFrames);
    let currentIndex = 0;

    const animate = () => {
      currentIndex += charsPerFrame;
      const currentText = text.substring(0, currentIndex);
      setAnimatedText(currentText);

      if (currentIndex < text.length) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedText(text);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (speechText && useExternalSpeechToText) {
      animateTextTyping(speechText);
    }
  }, [speechText, useExternalSpeechToText]);

  return {
    isListening,
    isLoading,
    startRecording,
    stopRecording,
    interimTranscript,
    speechText: useExternalSpeechToText ? animatedText : speechText,
    clearText,
  };
};

export default useSpeechToText;