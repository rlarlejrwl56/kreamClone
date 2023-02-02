import AddAddress from './addAddress';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import axios from 'axios';

const address =  () => {
    const [openAddress, setOpenAddress] = useState(false);
    const {data : session} = useSession();
    const [baseAddress, setBaseAddress] = useState([]);
    const onAddAdddress = () => {
        setOpenAddress(true);
    }
    const {status, data : addressInfo } = useQuery("addressList", async () => {
           const { data } = await axios.post(`http://localhost:4000/myPage/getAddress`, {params : { user_id : session.userId }});
           return data;
    });
    useEffect(() => {
        if(status === 'success') {
            const { 0 : base} = addressInfo.filter(address => address.DEFAULT_YN === 'Y');
            console.log(base);
            setBaseAddress(base);
        }
        console.log(addressInfo);
    }, [openAddress, status])
    return (
        <div className='max-w-[680px]'>
            <div className='text-[22px] font-semibold flex'>
                주소록
                <button className='ml-auto border-[1px] border-black text-[13px] px-2 font-[300] rounded-lg' onClick={onAddAdddress}> + 새 배송지 추가</button>
            </div>
            {
                openAddress ?
                    <AddAddress setOpenAddress={setOpenAddress}/>
                        :
                        null
            }
            <div className='pt-8'>
                <div className='flex flex-col border-b-[2px] border-black text-[15px] pb-6'>
                    <div className='flex items-center'>
                        <div className='font-[500]'>{baseAddress.NAME}</div> <div className='border-[1px] bg-gray-100 rounded-lg px-2 text-[12px] ml-2'>기본 배송지</div>
                    </div>
                    <div className='pt-1 flex'>
                        <div>
                            <h2>{baseAddress.PHONE}</h2>
                            <span>{baseAddress.POSTCODE}</span><span> {baseAddress.ADDRESS1} {baseAddress.ADDRESS2}</span>
                        </div>
                        <div className='ml-auto'>
                            <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>수정</button>
                            <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>삭제</button>
                        </div>
                    </div>
                </div>
                <div className='pt-8 flex'>
                    <div>
                        <h2>{addressInfo !== undefined ? addressInfo[0].NAME : ''}</h2>
                        <h2>010-9***-*178</h2>
                        <span>(1123)</span><span> 경기 성남시 장미로 303호 아이티 포워드</span>
                    </div>
                    <div className='ml-auto'>
                        <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>수정</button>
                        <button className='ml-2 border-[1px] px-2 rounded-lg py-1 text-[13px] font-[300]'>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default address;