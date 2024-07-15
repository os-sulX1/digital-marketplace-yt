import React from 'react'
import {Body, Button, Container, Head, Html, Preview, Section, Tailwind, Text ,  } from '@react-email/components'

const ProductEmail = ({link}: { link: string}) => {
  return (
    <Html>
      <Head/>
      <Preview>Your Product is here</Preview>
      <Tailwind>
        <Body className='bg-white font-sans'>
          <Container style={container}>
            <Text className='text-2xl font-semibold'>
              Hi ,Friend 
            </Text>
            <Text className='text-lg text-gray-600'>
              Thank you for buying your product from our store at Marshal UI.

            </Text>
            <Section className='w-full flex justify-start mt-7'>
              <Button className='text-white bg-blue-500 rounded-lg px-10 py-4  font-bold' href={link}>
                Your Download Link
              </Button>
              <Text className='text-xl'>
                Best,<br/> Marshal UI Team

              </Text>
              
            </Section>


          </Container>

        </Body>
      </Tailwind>
    </Html>
  )
}

const container = {
  margin:'0 auto',
  padding:'20px 48px'
}

export default ProductEmail