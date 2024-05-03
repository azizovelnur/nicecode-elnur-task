import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: "30px" }}></div>
      <Outlet />
    </>
  )
}
