import { Box, Grid, GridItem, Heading, Link, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {

    const [selectedOption, setSelectedOption] = React.useState<string>('')

    const onSelectedOption = (option: string) => {
        setSelectedOption(option)
    }


  return (
    <Grid templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={0} zIndex={100}>
        <GridItem w='100%' h='100%' style={style}>
            <h1>Amine Chaghir Chikhaoui</h1>
            <h2 style={{fontSize: 25}}>Software Engineer</h2>
            <caption style={{ marginTop: '5px', fontWeight: 'lighter'}}>
                I build cross-platform applications and fully products for the best experience
            </caption>

            <LinkBox as='animateMotion' maxW='sm' p='5' borderWidth='0px' rounded='md'>
                <Heading size='md' my='2'>
                    <LinkOverlay href='#' onClick={() => onSelectedOption('about')} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                       <Text fontSize={selectedOption == 'about' ? 25: 20} color={selectedOption == 'about' ? 'lightblue' : 'white'}>About</Text>
                    </LinkOverlay>
                </Heading>
            </LinkBox>
            <LinkBox as='animateMotion' maxW='sm' p='5' borderWidth='0px' rounded='md'>
                <Heading size='md' my='2'>
                    <LinkOverlay href='#experience' onClick={() => onSelectedOption('experience')}>
                        <Text fontSize={selectedOption == 'experience' ? 25: 20} color={selectedOption == 'experience' ? 'lightblue' : 'white'}>Experience</Text>
                    </LinkOverlay>
                </Heading>
            </LinkBox>
            <LinkBox as='animateMotion' maxW='sm' p='5' borderWidth='0px' rounded='md'>
                <Heading size='md' my='2'>
                    <LinkOverlay href='#projects' onClick={() => onSelectedOption('projects')}>
                        <Text fontSize={selectedOption == 'projects' ? 25: 20} color={selectedOption == 'projects' ? 'lightblue' : 'white'}>Projects</Text> 
                    </LinkOverlay>
                </Heading>
            </LinkBox>
        </GridItem>

        <GridItem w='100%' h='10'>
           <SimpleGrid templateRows={'repeat(3, 0fr)'} gap={0}>
            <Box w='100%' h='100%' style={style} id='about'>
                <Text variant={'body'} style={textJustifyStyle} marginTop={10}>
                    I am a passionate and dedicated Software Engineer with extensive knowledge in Java, Spring Boot, React, AWS, Docker, and Jenkins.
                    With nearly four years of professional experience, I have honed my technical expertise and developed strong soft skills. In my current
                    role as a Senior Software Engineer at Ayesa Advanced Technologies, I have successfully managed a team of four developers,
                    effectively generated technical documentation, including interfaces, APIs, and various types of diagrams. My commitment to
                    continuous learning and development, both professionally and personally, drives my success in the fast-paced world of software
                    engineering.
                </Text>
            </Box>
            <Box w='100%' style={style} id='experience'>
            <Text fontSize={'3xl'} style={textJustifyStyle}>Experience</Text>
            <Text fontSize={'xl'} style={textJustifyStyle}>This section is dedicated to my personal experience resume</Text>
                <Box marginTop={3}>
                    <Text fontSize={'xl'} style={textJustifyStyle}>2022 - Present: Lead Full Stack Software Engineer - Ayesa</Text>
                    <Text fontSize={'md'} noOfLines={[10]}  marginLeft={10} style={textJustifyStyle}>
                        Lead the build and maintain of a complete platform to manage the EV Chargers and the car charging for an important client on the electric sector. Work closely with multifunctional teams, including developers, designers and product managers, to implement with the best practices possible.
                    </Text>
                </Box>
                <Box style={{ marginTop: '10%'}}>
                    <Text fontSize={'xl'} style={textJustifyStyle}>2020 - 2022: Full Stack Software Engineer · Konecta BTO</Text>
                    <Text fontSize={'md'} noOfLines={[10]}  marginLeft={10} style={textJustifyStyle}>
                        Work on the build and maintain of a complete platform to manage the EV Chargers and the car charging for an important client on the electric sector. Work closely with multifunctional teams, including developers, designers and product managers, to implement with the best practices possible.
                    </Text>
                </Box>
            </Box>

            <Box w='100%' style={style} id='projects'>
                <Text fontSize={'3xl'} style={textJustifyStyle}>Projects</Text>
                <Text fontSize={'xl'} style={textJustifyStyle}>This section is dedicated to my personal projects</Text>
                <Text fontSize={'md'} style={textJustifyStyle}>You can found this personal projects source code on my <Link href='https://github.com/achaghirc?tab=repositories' isExternal>GitHub workspace</Link></Text>
                <Box style={{marginTop: 20}}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} style={textJustifyStyle}>Authorization Api</Text>
                    <Text fontSize={'md'} style={textJustifyStyle}>
                        This is a simple authorization api that I build to learn more about the authorization process using Ruby on Rails.
                        <br />
                        This project is a system that allows users with some permissions to congiure their applications and manage the actions that the users can do on this application based on users permissions.
                        So it manages diferent type of permissions, actions and applications.
                        <br />    
                        This system is build using Ruby on Rails and the database is managed by SqLite3. 
                        <br />
                        It also expose an API REST to interact with it, the postman collection is available on the Readme.MD file on github repository. 
                    </Text>
                    <Text style={textJustifyStyle} color={'blue.400'} marginTop={5}>    
                        <Link  href='https://github.com/achaghirc/authorization_api' isExternal>
                            Github link to the repository
                        </Link>
                    </Text>
                </Box>
                <Box style={{marginTop: 20}}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} style={textJustifyStyle}>Outnow App</Text>
                    <Text fontSize={'md'} style={textJustifyStyle}>
                        This is a full stack application that i built on my free time implementing a microservice architecture using Flutter and Spring Boot to learn more about the mobile development and the backend development.
                        <br />
                        This application has two important uses, first is an app that allow users to buy tickets for events and manage their tickets and second is an app that allow the event organizers to manage their events, the tickets that they sell and their employees.
                        This project also integrates Stipe payment on the backend to manage the payments and in the mobile app to allow users to pay for the tickets.
                        <br />    
                        Last but not least, this application also alow the users with RRPP profile to manage their selled tickets and the comissions that they get from the selled tickets.
                        <br />
                        This system developed by myself is a cross-platform application that encompass the mobile development and the backend development using Flutter and Spring Boot and the database that is managed by PostgreSQL.
                        You can find the source code on my github repository.
                    </Text>
                    <Text style={textJustifyStyle} color={'blue.400'} marginTop={5}>    
                        <Link  href='https://github.com/achaghirc/flutter-app' isExternal>
                            Mobile App source code
                        </Link>
                    </Text>
                    <Text style={textJustifyStyle} color={'blue.400'} marginTop={5}>    
                        <Link  href='https://github.com/achaghirc/stripe-adapter' isExternal>
                            Stripe microservice source code
                        </Link>
                    </Text>
                    <Text style={textJustifyStyle} color={'blue.400'} marginTop={5}>    
                        <Link  href='https://github.com/achaghirc/outnow-api' isExternal>
                            Backend Api microservice source code
                        </Link>
                    </Text>
                </Box>
                <Box style={{marginTop: 20, marginBottom: 10}}>
                    <Text fontSize={'2xl'} fontWeight={'bold'} style={textJustifyStyle}>Forniture Web</Text>
                    <Text fontSize={'md'} style={textJustifyStyle}>
                        This is a full stack applicatio web application designed to manage the inventory of a forniture shop.
                        <br />
                        This application is a system that allows the shop owner to manage the inventory of the shop, the products that they sell.
                        <br />
                        This system developed by myself is a cross-platform application that encompass the web development and the backend development using React with Typescript and Spring Boot and the database that is managed by PostgreSQL.
                        You can find the source code on my github repository.
                    </Text>
                    <Text style={textJustifyStyle} color={'blue.400'} marginTop={5}>    
                        <Link  href='https://github.com/orgs/fornitureAppp/repositories' isExternal>
                            Forniture Organization source code
                        </Link>
                    </Text>
                </Box>
            </Box>
           </SimpleGrid>
        </GridItem>
    </Grid>
  )
}

const textJustifyStyle : React.CSSProperties = ({
    textAlign: 'justify',
    textJustify: 'inter-word',
})

const style : React.CSSProperties = ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '15%',
})