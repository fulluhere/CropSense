import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useApp } from '../context/AppContext';
import { DashboardPage, NotificationsPage, LearnPage, SettingsPage } from '../pages/Pages';
function PreferenceEffects({children}) { const {language,highContrast,largeText,reduceMotion}=useApp(); useEffect(()=>{document.documentElement.lang=language;document.documentElement.classList.toggle('high-contrast',highContrast);document.documentElement.classList.toggle('large-text',largeText);document.documentElement.classList.toggle('reduce-motion',reduceMotion);},[language,highContrast,largeText,reduceMotion]); return children; }
export default function App(){return <BrowserRouter><PreferenceEffects><Routes><Route element={<Layout/>}><Route index element={<DashboardPage/>}/><Route path="notifications" element={<NotificationsPage/>}/><Route path="learn" element={<LearnPage/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></PreferenceEffects></BrowserRouter>}
