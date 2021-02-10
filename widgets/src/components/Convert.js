import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../apis/config.js';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)
  const [debouncedLang, setDebouncedLang] = useState(language)
  
  // Watch language, text here
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedLang(language)
      setDebouncedText(text)
    },1000)

    return () => clearTimeout(timerID)
  }, [language, text])


  // Use debounced language, text to get/set translation
  useEffect(() => {
    const doTranslation = async() => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: debouncedLang.value,
          key: config.GRIDER_KEY
        }
      });
      setTranslated(data.data.translations[0].translatedText)
    }
    if (debouncedText) {
      doTranslation()
    }
  }, [debouncedLang, debouncedText])


  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
}

export default Convert;