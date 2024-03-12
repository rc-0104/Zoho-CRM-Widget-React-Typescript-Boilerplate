import zohoLogo from './assets/zoho.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { initializeZohoWidget } from './libs/zoho'
import { useEffect, useState } from 'react'
import { DataEntityType } from './types'
import { getCurrentUser } from './libs/zoho'
import { UserType } from './types/user'


function App() {
  const [dataEntity, setDataEntity] = useState<DataEntityType | undefined>();
  const [currentUser, setCurrentUser] = useState<UserType>();

  useEffect(() => {
    initializeZohoWidget(setDataEntity)
  }, [])

  useEffect(() => {
    if (dataEntity) {
      getCurrentUser()
        .then(currentUser => {
          console.log(currentUser)
          setCurrentUser({
            full_name: currentUser.full_name,
            first_name: currentUser.first_name,
            last_name: currentUser.last_name
          });
        })
    }
  }, [dataEntity]);


  return (
    <>
      <div style={{ marginBlock: "1rem" }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.zoho.com" target="_blank">
          <img src={zohoLogo} className="logo zoho" alt="Zoho logo" />
        </a>
      </div>
      <h3>Zoho CRM Widget + Vite + React</h3>
      <div className={"card"} style={{ display: "flex", flexDirection: "column" }}>
        <span>Entity Name : {dataEntity?.Entity}</span>
        <span>Entity Id : {dataEntity?.EntityId}</span>
      </div>
      <div className={"card"} style={{ display: "flex", flexDirection: "column" }}>
        <span>Current User : </span>
        <span>Full name : {currentUser?.full_name}</span>
        <span>Last name : {currentUser?.last_name}</span>
        <span>First name : {currentUser?.first_name}</span>
      </div>
    </>
  )
}

export default App
