import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Text } from '@chakra-ui/react'
import { SiLinkedin } from 'react-icons/si'

type Props = {}

export default function Links({}: Props) {
  //Download the resume pdf locate in assets with name Amine Chaghir.pdf
  const onDownload = () => {
    window.open('https://drive.google.com/file/d/18IG4O-kFagAv11Brx7xKL_Fnxolh1q81/view?usp=sharing', '_blank')
  }
	const onRedirect = (url: string) => () => {
		window.open(`https://${url}`, '_blank')
	}


  return (
    <Box style={{display: 'flex', flexDirection: 'row'}} width={{sm: '100%', md: '50%'}}>
			<Button textAlign={'start'} w={'full'} colorScheme={'messenger'} rightIcon={<ExternalLinkIcon />} onClick={onDownload}>
				<Center>
					<Text>
						Full resume
					</Text>
				</Center>
			</Button>
			<Button textAlign={'start'} w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />} onClick={onRedirect('www.linkedin.com/in/amine-chaghir-chikhaoui')}>
				<Center>
					<Text>Send to Linkedin</Text>
				</Center>
			</Button>
    </Box>
  )
}