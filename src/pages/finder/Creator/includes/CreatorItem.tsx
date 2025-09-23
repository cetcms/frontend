/**
 * 创作者卡片组件
 * 用于展示创作者的基本信息、平台分布、数据统计等
 * @author 系统生成
 * @version 1.0.0
 */
import { ActionIcon, Avatar, Box, Button, Card, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWechat,
  IconBrandWeibo,
  IconBrandYoutube,
  IconBrandZhihu,
  IconStar,
} from '@tabler/icons-react';
import React from 'react';
import { useThemeMode } from 'src/hooks';

// 统计数据配置
const stats = [
  { value: '34K', label: '粉丝数量' },
  { value: '187', label: '内容投递' },
  { value: '1.6K', label: '总曝光量' },
];

// 平台配置
const platforms = [
  { icon: IconBrandInstagram, key: 'instagram', color: 'purple' },
  { icon: IconBrandYoutube, key: 'youtube', color: 'red' },
  { icon: IconBrandWechat, key: 'wechat', color: 'green' },
  { icon: IconBrandTiktok, key: 'tiktok', color: 'black' },
  { icon: IconBrandWeibo, key: 'weibo', color: 'orange' },
  { icon: IconBrandZhihu, key: 'zhihu', color: 'blue' },
];

/**
 * 创作者卡片组件
 * 展示创作者的详细信息和统计数据
 */
export const CreatorItem: React.FC = () => {
  // 获取主题配置
  const theme = useMantineTheme();
  // 获取颜色方案
  const colorScheme = useThemeMode();
  // 渲染统计数据项
  const statsItems = stats.map((stat) => (
    <Box key={stat.label} style={{ textAlign: 'center' }}>
      <Text
        ta="center"
        fz="lg"
        fw={700}
        style={{
          background: `linear-gradient(45deg, ${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][8]} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {stat.value}
      </Text>
      <Text ta="center" fz="xs" c="dimmed" lh={1} fw={500}>
        {stat.label}
      </Text>
    </Box>
  ));
  // 渲染平台图标
  const platformsItems = platforms.map((platform) => (
    <ActionIcon
      radius="xl"
      color={platform.color}
      aria-label={platform.key}
      key={platform.key}
      variant="light"
      size="md"
    >
      <platform.icon style={{ width: '70%', height: '70%' }} stroke={1.8} />
    </ActionIcon>
  ));

  return (
    <Card
      withBorder={colorScheme === 'dark'}
      padding="xs"
      radius="md"
      shadow="sm"
      style={{
        background:
          colorScheme === 'dark'
            ? `linear-gradient(135deg, ${theme.colors.dark[8]} 0%, ${theme.colors.dark[6]} 100%)`
            : `linear-gradient(135deg, ${theme.colors.gray[0]} 0%, ${theme.colors.gray[2]} 100%)`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Card.Section withBorder p="xs">
        <SimpleGrid cols={6}>{platformsItems}</SimpleGrid>
      </Card.Section>
      <Group justify="space-between">
        <Group pt="xs">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
            size={60}
            radius={60}
          />
          <Box>
            <Text fz="sm" fw={500}>
              显眼包工作室
            </Text>
            <Text fz="xs" c="dimmed">
              搞笑博主
            </Text>
          </Box>
        </Group>
        <ActionIcon size="md" variant="light" color="yellow">
          <IconStar size="16" fill="currentColor" />
        </ActionIcon>
      </Group>
      <Group mt="xs" justify="center" gap={30}>
        {statsItems}
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="md"
        size="xs"
        variant="gradient"
        gradient={{
          from: theme.primaryColor,
          to: theme.colors[theme.primaryColor][8],
          deg: 45,
        }}
      >
        邀请合作
      </Button>
    </Card>
  );
};
