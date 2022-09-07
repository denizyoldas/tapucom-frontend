import React from 'react'
import Button from '../UI/button'
import Select from '../UI/select'
import { useDispatch } from 'react-redux'
import { setAuthState } from '@/store/authSlice'
import SecretText from '../UI/secret-text'

const LOCALES = [
  { label: 'Türkçe', value: 'tr' },
  {
    label: 'English',
    value: 'en'
  },
  { label: 'Deutsch', value: 'de' }
]

const Profile = () => {
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(setAuthState(false))
  }

  return (
    <>
      <div className="">
        <div>E-mail: deniz.aksu@tapu.com</div>
        <div>
          Password: <SecretText text={'121231'} />
        </div>
        <div>Current Locale: TR</div>
      </div>
      <div>
        <Select options={LOCALES} />
      </div>
      <div>
        <Button variant="outline" onClick={logOutHandler}>
          Log Out
        </Button>
      </div>
    </>
  )
}

export default Profile
