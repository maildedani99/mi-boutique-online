"use client"
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/navigation'
import Link from 'next/link';



export default function CloseModalIcon () {

    const router = useRouter()


    return (
        <div onClick={() => {router.back()}}>
        <MdClose size={50} color="#636364" className=" absolute top-0 right-0 cursor-pointer" />
        </div>
    )
}