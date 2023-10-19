import { FlatList, HStack, Text, VStack } from 'native-base'
import * as Header from '@components/Header'
import { Input } from '@components/Input'
import { MenuCoffee } from '../Mock/Menu'
import { CardHeader } from '@components/CardHeader'
import { Filter } from '@components/Filter'
import { useCallback, useState } from 'react'
import { Card } from '@components/Card'
import Animated, { Easing, SlideInRight } from 'react-native-reanimated'

export function Home() {
  const [levels, setLevels] = useState<number | null>(null)

  function handleLevelFilter(level: number) {
    setLevels(level)
  }

  const HeadFlatList = useCallback(() => {
    return (
      <>
        <HStack>
          <Filter
            title="tradicionais"
            onPress={() => handleLevelFilter(1)}
            isChecked={levels === 1}
          />
          <Filter
            title="doces"
            onPress={() => handleLevelFilter(2)}
            isChecked={levels === 2}
          />
          <Filter
            title="especiais"
            onPress={() => handleLevelFilter(3)}
            isChecked={levels === 3}
          />
        </HStack>
      </>
    )
  }, [levels])

  return (
    <VStack px={4} flex={1} bg="gray.900">
      <Header.Root>
        <Header.Title color="white" fontSize="2xl" title="Home" />
        <Header.ShoppingCartButton quantity={4} />
      </Header.Root>

      <Text color="white" fontSize="lg" fontFamily="bodyBaloo">
        Encontre o café perfeito para qualquer hora do dia
      </Text>

      <VStack mt={4} mb={4}>
        <Input mb={8} placeholder="Pesquisar" />

        <Animated.FlatList
          entering={SlideInRight.delay(1000).duration(500).easing(Easing.ease)}
          data={MenuCoffee}
          renderItem={({ item }) => <CardHeader item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </VStack>

      <FlatList
        ListHeaderComponent={() => HeadFlatList()}
        data={MenuCoffee}
        mt={4}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64 }}
      />
    </VStack>
  )
}
