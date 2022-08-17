import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Home({fs}) {
  console.log(fs);
  const navigate = useNavigate()
  const [userdata, setuserdata] = useState([])
  const [loading, setloading] = useState(false)
  const print = async () => {
    setloading(true)
    const { data } = await axios.get(`https://restcountries.com/v2/all`)
    setuserdata(data)
    setloading(false)
  }
  useEffect(() => {
    print()
  } , [])
  const handleLogout = () => {
    navigate('/')
  }
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="card my-3 ">
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <button type="button" class="btn btn-dark" disabled>

                    {
                      loading ? 'Loading...' : userdata.length > 0 ? userdata.length : 'No Data Found'
                    }
                    {
                    loading 
                    ? <div className="spinner-border text-light"></div> 
                    : null
                    }
                  </button>
                <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
                </div>
                <table class="table table-dark table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Capital</th>
                      <th scope="col">Currency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userdata?.map((item, index) => {
                        
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.capital}</td>
                            <td>{item.currencies?.map(curr=> curr.name)}</td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
