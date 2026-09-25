import React, {  createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    name: "Adi",
    role: "Frontend Developer",
    experience: "Fresher",
    skills: ["React", "JavaScript", "SQL"],
    targetCompany: "Product-based company"
  });

  const [progress, setProgress] = useState({
    readiness: 78,
    technical: 82,
    hr: 64,
    communication: 73,
    problemSolving: 76,
    completedQuestions: 35,
    totalQuestions: 50
  });

  const [interview, setInterview] = useState({
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false
  });

  const [darkMode, setDarkMode] = useState(false);

  const updateUser = (data) => setUser((prev) => ({ ...prev, ...data }));

  const completeQuestion = (isCorrect) => {
    setProgress((prev) => ({
      ...prev,
      completedQuestions: Math.min(prev.completedQuestions + 1, prev.totalQuestions),
      technical: isCorrect ? Math.min(prev.technical + 1, 100) : prev.technical
    }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        progress,
        setProgress,
        interview,
        setInterview,
        darkMode,
        setDarkMode,
        updateUser,
        completeQuestion
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
