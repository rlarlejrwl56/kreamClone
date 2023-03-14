import {emailCheck, pwdCheck} from '../../hooks/InputValidation';
import {useState, useEffect} from "react";
const changeUser = (props) => {
    const [a, setA] = useState({isEx : false, email : ''});
    const onChangeHandler = (name,e) => {
        if(name === 'userName'){
            setA({isEx : emailCheck(e.target.value) , email : e.target.value});
        }
    }
    if(props.name === 'userEmail') {
        return (
            <div>
                <div className={`mt-4 ${a.isEx && a.email.length > 1 ? 'text-black' : 'text-[red]'}`}>
                    <p>새로운 이메일</p>
                    <div className='text-[13px] font-[300] flex cursor-pointer mt-2'>
                        <input type='text' placeholder='- 없이 입력하세요'
                               className={`w-full border-b-[1px] pb-1 outline-none border-b ${a.isEx && a.email.length !== 0 ? 'focus:login-focus' : 'outline-none border-b-[red]'}`}
                               autoComplete='off' name='userName' onChange={(e) => onChangeHandler(e.target.name, e)}/>
                    </div>
                    {a.isEx || a.email.length > 0 && <p className='text-[11px] mt-2'>이메일 주소를 정확히 입력해주세요.</p>}
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='border px-8 py-2 rounded-xl' onClick={()=>{props.setShow(false)}}>취소</button>
                    <button
                        className={`border px-8 py-2 rounded-xl ml-4 text-white ${a.isEx ? 'bg-black' : 'bg-[#ebebeb]'}`}>저장
                    </button>
                </div>
            </div>
        )
    }
}

export default changeUser;