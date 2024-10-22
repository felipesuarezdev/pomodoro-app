import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee } from 'lucide-react';

const PomodoroTimer = () => {
  // Estados para manejar los tiempos y el estado del temporizador
  // sobre todo sirve cuando estamoas cambiando el tiempo que seleccionamos!
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Opciones de tiempo disponibles
  const workTimeOptions = [15, 20, 25, 30, 45, 60];
  const breakTimeOptions = [5, 10, 15, 20];

  // Efecto para manejar el temporizador
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Cambiar entre trabajo y descanso
            const audio = new Audio('/api/placeholder/beep.mp3');
            audio.play();
            setIsBreak(!isBreak);
            setMinutes(isBreak ? workTime : breakTime);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, workTime, breakTime, isBreak]);

  // Función para resetear el temporizador
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(workTime);
    setSeconds(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {isBreak ? 'Tiempo de break' : 'Tiempo de Trabajo'}
        </h1>

        <div className="text-6xl font-bold text-center text-gray-900">
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            {isActive ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={resetTimer}
            className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
          >
            <RotateCcw size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duración del trabajo/estudio
            </label>
            <div className="grid grid-cols-3 gap-2">
              {workTimeOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setWorkTime(time);
                    if (!isBreak) {
                      setMinutes(time);
                      setSeconds(0);
                    }
                  }}
                  className={`p-2 rounded ${
                    workTime === time
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {time}m
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duración del break
            </label>
            <div className="grid grid-cols-2 gap-2">
              {breakTimeOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setBreakTime(time);
                    if (isBreak) {
                      setMinutes(time);
                      setSeconds(0);
                    }
                  }}
                  className={`p-2 rounded ${
                    breakTime === time
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {time}m
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-gray-500">
          <Coffee className="mr-2" size={20} />
          <span>
            {isBreak ? 'Tómate un break!' : 'Mantente enfocado!'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;