import { Image } from "@nextui-org/react";
import NameSVG from "./components/NameSVG";
import { Card, Flex, Text, Box } from "@radix-ui/themes";
import TestComponent from "./components/TestComponent";

export default function Home() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Card variant="ghost">
        <NameSVG />
      </Card>

      <Box width={"300px"}>
        <Card>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dapibus sapien nec lectus tempor, eu volutpat eros tempus. Nam sit
            amet sem nibh. Donec ullamcorper ipsum orci, vitae gravida mauris
            ultricies eu. Maecenas quis nulla eleifend massa suscipit dictum a
            at dolor. Cras fringilla dui tempor erat pellentesque euismod. Sed a
            urna tempor, condimentum elit in, rutrum augue. Cras ullamcorper mi
            purus, vel finibus felis auctor sit amet. Phasellus hendrerit
            viverra eros quis egestas. Mauris ac velit eros. Etiam scelerisque
            eget sem a congue. Etiam sollicitudin scelerisque vehicula.
            Curabitur tempus et ipsum eget pellentesque. Sed lacinia ornare
            nunc, vel varius eros. Vivamus nibh neque, placerat ut libero et,
            pharetra blandit nunc. Curabitur odio purus, vehicula nec quam nec,
            feugiat venenatis lorem. In hac habitasse platea dictumst. Aliquam
            at aliquam magna. Aenean sit amet velit vel sapien finibus tristique
            vel eget sem. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed a ante nec arcu fringilla ornare. Sed luctus purus ut
            facilisis interdum. Morbi accumsan, elit vitae tristique molestie,
            tortor orci suscipit tellus, eu pharetra turpis risus et ante.
            Praesent consectetur tellus ut augue mattis gravida eget a nisi.
            Mauris id mi turpis. Aliquam dictum porta luctus. Curabitur interdum
            ipsum sed sagittis tempus. Vestibulum a diam rutrum libero elementum
            sodales. Quisque eu rutrum lectus, non facilisis leo. Vestibulum ut
            dolor sagittis, viverra sem non, ornare urna. Vivamus tristique
            maximus eleifend. Sed vestibulum pellentesque dolor. Phasellus et
            nunc id nunc pretium volutpat eu in justo. Aliquam erat volutpat.
            Vestibulum auctor dui nec massa ultricies, vel lobortis ipsum
            pulvinar. Praesent molestie dui et euismod dapibus. Aliquam ornare
            libero in dui scelerisque, a sagittis lorem porttitor. Donec gravida
            ultricies elit, non interdum ex pretium at. Aenean porttitor lacus a
            tellus facilisis, vel ultrices ipsum aliquet. Sed bibendum, metus
            sit amet imperdiet molestie, urna augue imperdiet augue, a bibendum
            dolor odio eget massa. Nunc vel volutpat nunc. Aliquam et porttitor
            nibh. Nam est nisl, imperdiet nec neque quis, imperdiet dignissim
            elit. Etiam id rutrum enim. Aenean vestibulum vestibulum nisl at
            viverra. Donec efficitur imperdiet mi sed pellentesque. Morbi eu
            luctus lorem, quis mattis justo. Praesent id urna sed erat convallis
            egestas sodales eu orci. Fusce et interdum mauris. Sed tempor lectus
            dapibus est lobortis, dapibus imperdiet ipsum lacinia. Fusce aliquet
            nulla et sapien volutpat, dignissim dignissim sapien ultrices. Duis
            dapibus volutpat nisl. Nullam quis odio dapibus, blandit nulla nec,
            accumsan leo. Morbi pulvinar urna quis massa tempus aliquam.
            Pellentesque non ipsum nibh. Nulla tempor nulla eget augue faucibus,
            non finibus orci mattis. Etiam in ex eros. Aenean consequat magna
            sed erat lacinia bibendum. In blandit nibh a justo vulputate, eu
            ultrices est ornare. Sed fringilla lorem mi, vel gravida orci
            eleifend imperdiet. Fusce tincidunt iaculis arcu posuere rutrum.
            Quisque efficitur tellus sed erat condimentum, ac faucibus massa
            consectetur. Aenean maximus velit euismod, maximus tellus eget,
            varius orci. Quisque interdum molestie dapibus. Phasellus et mauris
            bibendum, ullamcorper dolor ut, semper urna. Phasellus quis velit
            non tortor efficitur aliquet. Ut rhoncus tortor ac nulla pulvinar,
            at rhoncus dolor blandit.
          </Text>
        </Card>
      </Box>
    </Flex>
  );
}
