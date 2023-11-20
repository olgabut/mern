import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import {useNavigate} from 'react-router-dom'

export const CreatePage = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = useState('')

    const pressHandler = async (event) => {
        if (event.key === 'Enter'){
            try {
                console.log()
                const data = await request(
                    '/api/link/generate', 
                    'POST', 
                    { from: link },
                    { Authorization: `Bearer ${auth.token}`}
                )
                console.log(data.link._id)
                navigate(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }
    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input 
                        placeholder="Push link" 
                        id="link"
                        type="text"
                        onChange={(event) => {setLink(event.target.value)}}
                        onKeyUp={pressHandler}
                    />
                    <label htmlFor="link">Enter the link</label>
                </div>
            </div>
        </div>
    )
}