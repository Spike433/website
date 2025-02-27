import {
  Column,
  Flex,
  Heading,  
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";

const title = 'Contact';
const description = 'Contact me for any questions or collaborations.';

export async function generateMetadata() {
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            description: description,
          }),
        }}
      />
      <Flex fillWidth mobileDirection="column" horizontal="center">        
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
                    
        </Column>
      </Flex>
    </Column>
  );
}
