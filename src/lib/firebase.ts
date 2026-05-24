/**
 * Configuração de conexão com o Firebase.
 * Aqui nós inicializamos os serviços que vamos usar, como o Banco de Dados (Firestore).
 */

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- IMPORTAÇÃO NOVA PARA O BANCO DE DADOS

// Suas chaves de acesso ao projeto e-leve-app
const firebaseConfig = {
  apiKey: "AIzaSyDhnah9YbMk1Dk9o4by3dFPcg5Q2XOvOTQ",
  authDomain: "e-leve-app.firebaseapp.com",
  projectId: "e-leve-app",
  storageBucket: "e-leve-app.firebasestorage.app",
  messagingSenderId: "199079762900",
  appId: "1:199079762900:web:8a86354b863bcb27199441",
  measurementId: "G-ZWJE9Y5F29"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Analytics (apenas se for suportado pelo navegador)
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Inicializa o Firestore (Banco de Dados) e o exporta para usarmos no resto do app
export const db = getFirestore(app);
