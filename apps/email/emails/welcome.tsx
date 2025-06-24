import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import type { FC } from 'react';

type WelcomeEmailProps = {
  name: string;
};

export const WelcomeEmail: FC<WelcomeEmailProps> = ({ name }) => (
  <Html>
    <Head />
    <Preview>Welcome to Next Forge!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to Next Forge, {name}!</Heading>
        <Text style={text}>
          Thanks for joining us. We're excited to have you on board!
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  paddingTop: '32px',
  paddingBottom: '32px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
};

export default WelcomeEmail;
