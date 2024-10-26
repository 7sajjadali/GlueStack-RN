import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text,Select,SelectBackdrop,Icon,SelectContent,SelectDragIndicator,SelectDragIndicatorWrapper,SelectPortal,SelectItem,SelectInput,SelectTrigger,SelectIcon } from '@gluestack-ui/themed';
import { ScrollView,View } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  return <Container />;
};

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          position="absolute"
          $base-h={500}
          $base-w={500}
          $lg-h={700}
          $lg-w={700}
        >
          <Gradient />
        </Box>
        <View style={{marginTop:40}}></View>
        <Select  >
          <SelectTrigger variant="outline" size="md" >
            <SelectInput placeholder="Select option" />
            <SelectIcon>
            <Ionicons name="chevron-down" size={22} color="green" />
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop/>
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem
                label="Cross Platform Development Process"
                value="cross-platform"
              />
              <SelectItem
                label="UI Designing"
                value="ui"
                isDisabled={true}
              />
              <SelectItem
                label="Backend Development"
                value="backend"
              />
            </SelectContent>
          </SelectPortal>
        </Select>
        <Box
          height="60%"
          $base-my="$16"
          $base-mx="$5"
          $base-h="80%"
          $lg-my="$24"
          $lg-mx="$32"
          justifyContent="space-between"
          alignItems="center"
        >


          <Box
            bg="#64748B33"
            py="$2"
            px="$6"
            rounded="$full"
            alignItems="center"
            marginTop={20}
            $base-flexDirection="column"
            $sm-flexDirection="row"
            $md-alignSelf="flex-start"
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Logo />
          </Box>
          <Box $base-flexDirection="column" $md-flexDirection="row">
            <FeatureCard
              iconSvg={DocumentData}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={LightBulbPerson}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={Rocket}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
      

      
        </Box>
      </ScrollView>
    </Box>
  );
};
