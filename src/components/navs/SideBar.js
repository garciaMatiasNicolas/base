'use client'
import {
  Barcode,
  CaretDown,
  ChartPie,
  CheckSquare,
  Checks,
  HourglassLow,
  HouseLine,
  MagnifyingGlass,
  PencilLine,
  PresentationChart,
  UserCircle,
  SignOut
} from 'phosphor-react'
import {
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarCollapse,
  SidebarDropdown,
  SidebarDropdownList,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from 'keep-react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const SidebarComponent = () => {
  let navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove('authTkn');
    navigate("/login");
  };
  
  return (
    <Sidebar className='h-full'>
      <SidebarBody>
         <span className="flex h-auto w-auto items-start p-3 justify-start rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
            Nombre
         </span>

        <fieldset className="relative">
          <Input placeholder="Search" className="ps-11" />
          <InputIcon>
            <MagnifyingGlass size={19} color="#AFBACA" />
          </InputIcon>
        </fieldset>

        <SidebarList className="space-y-0.5">
          <SidebarItem>
            <HouseLine size={20} />
            Inicio
          </SidebarItem>
          <SidebarItem>
            <PresentationChart size={20} />
            Dashboard
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <UserCircle size={20} />
                  Account
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <PencilLine size={20} />
                  Update Info
                </SidebarItem>
                <SidebarItem>
                  <Barcode size={20} />
                  My Order
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>
          <SidebarItem dropdown>
            <SidebarDropdown>
              <SidebarCollapse>
                <div className="flex items-center gap-3">
                  <span>
                    <CheckSquare size={20} />
                  </span>
                  <span>Tasks</span>
                </div>
                <span className="group-open:-rotate-180">
                  <CaretDown size={20} />
                </span>
              </SidebarCollapse>

              <SidebarDropdownList>
                <SidebarItem>
                  <HourglassLow size={20} />
                  In Progress
                </SidebarItem>
                <SidebarItem>
                  <Checks size={20} />
                  Completed
                </SidebarItem>
              </SidebarDropdownList>
            </SidebarDropdown>
          </SidebarItem>

          <SidebarItem>
            <ChartPie size={20} />
            Reporting
          </SidebarItem>
        </SidebarList>
      </SidebarBody>

      <SidebarFooter className='flex flex-col w-full items-start gap-1'>
        <SidebarItem onClick={handleLogOut}>
          <SignOut size={20} />
          Cerrar sesión
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
};


export default SidebarComponent;