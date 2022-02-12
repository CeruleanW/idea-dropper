import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/client';

const Input = styled.input`
  border-width: 2px;
  margin-left: 1rem;
`;

export default function SignUpPage() {
  const { register, handleSubmit, watch, errors } = useForm();
  const router = useRouter();
  const [session, loading] = useSession();

  // Submit -> Authentication: Check account&password -> if valid, go to user page, else display an error message
  const onSubmit = (data) => {
    console.log(data);
    signIn();
  };

  return (
    <div className={'flex flex-col p-5'}>
      <form method='POST' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='account'>User Account:</label>
          <Input
            name='account'
            type='email'
            placeholder='#@gmail.com'
            ref={register({ required: true, maxLength: 255 })}
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='password'>Password:</label>
          <Input
            name='password'
            type='password'
            placeholder=''
            ref={register}
          />
        </div>
        <Button type='submit'>Submit</Button>
        <Link href='/'>
          <Button>Back</Button>
        </Link>
      </form>

      {session ? (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
