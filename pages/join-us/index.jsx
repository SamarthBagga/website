import React from 'react';
import {
  SimpleGrid, Heading,
  Button, Box, Link, Text,
} from '@chakra-ui/react';

import { NextSeo } from 'next-seo';
import ResponsiveContainer from '../../components/Layout/ResponsiveContainer';
import SocietyCard from '../../components/JoinUs/SocietyCard';
import Benefits from '../../components/JoinUs/Benefits';
import TitleHeader from '../../components/Layout/TitleHeader';
import FadeInUp from '../../components/FadeInUp';
import getJoinUsData from '../../cms/queries/joinus';
import Slideshow from '../../components/MembershipDrive/Slideshow';

const JoinUs = ({ joinUsData }) => (
  <main>
    <NextSeo
      title={joinUsData.seo.title}
      description={joinUsData.seo.description}
      canonical="https://ieeemuj.com/membership"
      openGraph={{
        description: joinUsData.seo.description,
        images: [
          {
            height: joinUsData.seo.image.dimensions.height,
            width: joinUsData.seo.image.dimensions.width,
            url: joinUsData.seo.image.url,
            alt: joinUsData.seo.image.alt,
          },
        ],
      }}
    />
    <TitleHeader>
      <FadeInUp>
        <Heading
          size="lg"
          textAlign="center"
          color="white"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          LOCAL MEMBERSHIP
        </Heading>
        <Text
          fontSize="md"
          color="gray.200"
          textAlign="center"
          backgroundColor="brand.700"
          padding="8px"
          rounded="lg"
        >
          We see the future of engineering in you.
        </Text>
      </FadeInUp>
    </TitleHeader>
    <ResponsiveContainer>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={2}
          minChildWidth="180px"
        >
          <Heading
            as="h3"
            size="md"
          >
            Registration is now Open!
          </Heading>
          <Box>
            <Button
              as={Link}
              href={joinUsData.registrationFormLink}
              float="right"
              bgColor="brand.700"
              boxShadow="0 4px 8px rgba(0, 9, 61, .24);"
              padding="16px"
              rounded="lg"
              color="white"
              _hover={{
                border: 'none',
                textDecoration: 'none',
              }}
              _active={{
                border: 'none',
                boxShadow: 'none',
                transform: 'scale(0.97)',
              }}
              _focus={{
                border: 'none',
                boxShadow: 'none',
                bg: 'brand',
              }}
            >
              REGISTER
            </Button>
          </Box>
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
        <Benefits reasons={joinUsData.reasons} />
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={1}
          spacing="10"
          minChildWidth="200px"
          marginTop="10"
        >
          <Heading
            as="h7"
            size="sm"
          >
            All Societies & Affinity Groups included in membership.
          </Heading>
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={['1', '1', '1', '2', '2']}
          width="100%"
          justifyItems="center"
          spacingX="50px"
          spacingY="50px"
        >
          {joinUsData.societies.map((society) => (
            <SocietyCard society={society} />
          ))}
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={2}
          spacingX="90px"
          minChildWidth="200px"
        >
          <Heading
            as="h7"
            size="sm"
            width="100%"
            textAlign="center"
          >
            Glimpse of what we do
          </Heading>
        </SimpleGrid>
      </FadeInUp>
      <FadeInUp>
        <SimpleGrid
          py="32px"
          columns={4}
          spacingX="80px"
          spacingY="90px"
          minChildWidth="150px"
        >
          <Slideshow gallery={joinUsData.gallery} />
        </SimpleGrid>
      </FadeInUp>
    </ResponsiveContainer>
  </main>
);

export async function getStaticProps() {
  const joinUsData = await getJoinUsData();

  if (joinUsData) {
    return {
      props: {
        joinUsData,
      },
    };
  }
  return {
    notFound: true,
  };
}

export default JoinUs;
