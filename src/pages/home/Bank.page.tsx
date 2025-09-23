import { Box, Button, Card } from '@mantine/core';
import { IconBuildingBank } from '@tabler/icons-react';
import { useEffect } from 'react';
import { HeadLinks, PageHeader, TreeLinks, Welcome } from 'src/components';
import { menuLinks } from 'src/config/menuLinks';
import { useLayoutStore } from 'src/store';

export function BankPage() {
  const { setLeftSection, setHeadSection, setPageInfo, setSetting, unsetSections } = useLayoutStore();

  useEffect(() => {
    setSetting({
      navbarCollapsed: true,
      fixedHeadSection: true,
    });
    setPageInfo({
      title: '空白页面',
      subtitle: '空白页面',
      description: '这是一个空白页面，用来演示使用',
      icon: <IconBuildingBank />,
    });
    setLeftSection(
      <Box h="100%" w={180}>
        <TreeLinks links={menuLinks} />
      </Box>
    );
    setHeadSection(
      <Box>
        <HeadLinks links={menuLinks} />
        <PageHeader
          rightSection={
            <Box>
              <Button>Add</Button>
            </Box>
          }
        />
      </Box>
    );
    return unsetSections;
  }, []);

  return (
    <Box p="md" pt={0}>
      <Card withBorder>
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
      </Card>
    </Box>
  );
}
