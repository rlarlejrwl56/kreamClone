import {emailCheck, pwdCheck} from '../../hooks/InputValidation';
import {useState, useEffect} from "react";
import PopUpSize from '../register/popUpSize';

type changeType = [
    {
        isEx : boolean,
        email : string
    },
    {
        isEx : boolean
        pwd : string
    },
    {
        name : string
    },
    {
        isEx : boolean
        phone : string
    },
    {
        size : string
    }
]
const changeUser = (props) => {
    const [change, setChange] = useState<changeType[] | any>(
        [{
            isEx : false,
            email : ''
        },
        {
            isEx : false,
            pwd : ''
        },
        {
            name : ''
        },
        {
            isEx : false,
            phone : ''
        },
        {
            size : ''
        }]
    );

    const onChangeHandler = (name,e) => {
        let copyArray = [...change];
        if(name === 'userName'){
            copyArray[0] = {...copyArray[0], isEx: emailCheck(e.target.value), email: e.target.value};
            setChange(copyArray);
        }
        if(name === 'userPwd'){
            copyArray[1] = {...copyArray[1], isEx: pwdCheck(e.target.value), pwd : e.target.value};
            setChange(copyArray);
            console.log(change);

        }
        if(name === 'userName'){
            copyArray[2] = {...copyArray[2], name : e.target.value};
        }
    }

    if(props.name === 'userEmail') {
        return (
            <div>
                <div className={`mt-4 ${change[0].isEx || (change[0].email.length <= 0) ? 'text-black' : 'text-[red]'}`}>
                    <p>새로운 이메일</p>
                    <div className='text-[13px] font-[300] flex cursor-pointer mt-2'>
                        <input type='text' placeholder='예)Kream@Kream.co.kr'
                               className={`w-full border-b-[1px] pb-1 outline-none border-b ${change[0].isEx || (change[0].email.length <= 0) ? 'focus:login-focus' : 'outline-none border-b-[red]'}`}
                               autoComplete='off' name='userName' onChange={(e) => onChangeHandler(e.target.name, e)}/>
                    </div>
                    {change[0].isEx || change[0].email.length > 0 && <p className='text-[11px] mt-2'>이메일 주소를 정확히 입력해주세요.</p>}
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='border px-8 py-2 rounded-xl' onClick={()=>{props.setShow(false)}}>취소</button>
                    <button
                        className={`border px-8 py-2 rounded-xl ml-4 text-white ${change[0].isEx ? 'bg-black' : 'bg-[#ebebeb]'}`}>저장
                    </button>
                </div>
            </div>
        )
    }

    if(props.name === 'userPwd') {
        return (
            <div>
                <div className={`mt-4 ${change[1].isEx || (change[1].pwd.length <= 0) ? 'text-black' : 'text-[red]'}`}>
                    <p>새로운 비밀번호</p>
                    <div className='text-[13px] font-[300] flex cursor-pointer mt-2'>
                        <input type='password' placeholder='영문, 숫자, 특수문자 조합 8-16자'
                               className={`w-full border-b-[1px] pb-1 outline-none border-b ${change[1].isEx || (change[1].pwd.length <= 0) ? 'focus:login-focus' : 'outline-none border-b-[red]'}`}
                               autoComplete='off' name='userPwd' onChange={(e) => onChangeHandler(e.target.name, e)}/>
                    </div>
                    {change[1].isEx || change[1].pwd.length > 0 && <p className='text-[11px] mt-2'>영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)</p>}
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='border px-8 py-2 rounded-xl' onClick={()=>{props.setShow(false)}}>취소</button>
                    <button
                        className={`border px-8 py-2 rounded-xl ml-4 text-white ${change[1].isEx ? 'bg-black' : 'bg-[#ebebeb]'}`}>저장
                    </button>
                </div>
            </div>
        )
    }

    if(props.name === 'userName') {
        return (
            <div>
                <div className={`mt-4 ${change[2].name.length >= 2 || change[2].name.length <= 0 ? 'text-black' : 'text-[red]'}`}>
                    <p>새로운 이름</p>
                    <div className='text-[13px] font-[300] flex cursor-pointer mt-2'>
                        <input type='text' placeholder='고객님의 이름'
                               className={`w-full border-b-[1px] pb-1 outline-none border-b ${change[2].name.length >= 2 || change[2].name.length <= 0 ? 'focus:login-focus' : 'outline-none border-b-[red]'}`}
                               autoComplete='off' name='userName' onChange={(e) => onChangeHandler(e.target.name, e)}/>
                    </div>
                    {change[2].name.length <= 1 && change[2].name.length != 0 && <p className='text-[11px] mt-2'>올바른 이름을 입력해주세요. (2-50자)</p>}
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='border px-8 py-2 rounded-xl' onClick={()=>{props.setShow(false)}}>취소</button>
                    <button
                        className={`border px-8 py-2 rounded-xl ml-4 text-white ${change[2].name.length >= 2 ? 'bg-black' : 'bg-[#ebebeb]'}`}>저장
                    </button>
                </div>
            </div>
        )
    }

    if(props.name === 'userPhone') {
        return (
            <div>
                <div className={`mt-4 ${change[3].isEx || (change[3].phone.length <= 0) ? 'text-black' : 'text-[red]'}`}>
                    <p>새로운 비밀번호</p>
                    <div className='text-[13px] font-[300] flex cursor-pointer mt-2'>
                        <input type='password' placeholder='영문, 숫자, 특수문자 조합 8-16자'
                               className={`w-full border-b-[1px] pb-1 outline-none border-b ${change[3].isEx || (change[3].phone.length <= 0) ? 'focus:login-focus' : 'outline-none border-b-[red]'}`}
                               autoComplete='off' name='userPwd' onChange={(e) => onChangeHandler(e.target.name, e)}/>
                    </div>
                    {change[3].isEx || (change[3].phone.length <= 0) && <p className='text-[11px] mt-2'>영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)</p>}
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='border px-8 py-2 rounded-xl' onClick={()=>{props.setShow(false)}}>취소</button>
                    <button
                        className={`border px-8 py-2 rounded-xl ml-4 text-white ${change[3].isEx ? 'bg-black' : 'bg-[#ebebeb]'}`}>저장
                    </button>
                </div>
            </div>
        )
    }
}

export default changeUser;