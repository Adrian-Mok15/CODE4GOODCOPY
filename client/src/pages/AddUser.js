import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'users'), {
        _id: 'roshan',
        password: 'rajan',
        memberType: 'student',
        username: 'roshanrajan02' 
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }