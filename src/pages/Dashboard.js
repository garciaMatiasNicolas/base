import React from 'react'
import SidebarComponent from '../components/navs/SideBar.js'

const Dashboard = () => {
    return (
      <div className="flex h-screen"> {/* Flex para layout con sidebar */}
        {/* Sidebar fijo a la izquierda */}
        <div className="w-auto"> {/* Ancho fijo para el sidebar */}
          <SidebarComponent />
        </div>
        
        {/* Contenido principal del Dashboard */}
        <div className="flex-1 p-6 bg-gray-100"> {/* El contenido ocupa el resto del espacio */}
          <h1 className="text-2xl font-semibold">Bienvenido al Dashboard</h1>
          <p>Aquí va el contenido principal...</p>
          {/* Agrega el resto de tu contenido aquí */}
        </div>
      </div>
    );
}

export default Dashboard