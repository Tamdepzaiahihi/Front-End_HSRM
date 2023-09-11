import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import UserList from './components/UserList'
import Update from './components/FormOfLayingOff/Update'
import Create from './components/FormOfLayingOff/Create'
import List from './components/FormOfLayingOff/List'
import SalaryList from './components/Salary/SalaryList'
import SalaryUpdate from './components/Salary/SalaryUpdate'
import SalaryCreate from './components/Salary/SalaryCreate'
import DepartmentList from './components/Department/DepartmentList'
import DepartmentUpdate from './components/Department/DepartmentUpdate'
import DepartmentCreate from './components/Department/DepartmentCreate'
import AttendanceCreate from './components/Attendance/AttendanceCreate'
import AttendanceList from './components/Attendance/AttendanceList'
import AttendanceUpdate from './components/Attendance/AttendanceUpdate'


export const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/users' element={<UserList/>}></Route>

        <Route path='/listForm' element={<List/>}/>
        <Route path="/editForm/:id" element={<Update/>} />
        <Route path='/addForm' element={<Create/>}/>

        <Route path='/listSalary' element={<SalaryList/>}/>
        <Route path="/editSalary/:id" element={<SalaryUpdate/>} />
        <Route path='/addSalary' element={<SalaryCreate/>}/>

        <Route path="/listDepartments" element={<DepartmentList />} />
        <Route path="/addDepartment" element={<DepartmentCreate />} />
        <Route path="/editDepartment/:id" element={<DepartmentUpdate />} />

        <Route path="/listAttendance" element={<AttendanceList />} />
        <Route path="/createAttendance" element={<AttendanceCreate />} />
        <Route path="/updateAttendance/:id" element={<AttendanceUpdate />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

