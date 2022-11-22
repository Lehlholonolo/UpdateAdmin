import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Gardening',
    imageUrl: '/static/images/products/Garden1.webp',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Nanny Services',
    imageUrl: '/tatic/images/products/nanny.jpg',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Light Maintenance',
    imageUrl: '/static/images/products/lightM.webp',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'House Keeper',
    imageUrl: '/static/images/products/Housing.webp',
    updatedAt: subHours(Date.now(), 5)
  },
  // {
  //   id: uuid(),
  //   name: 'GitHub',
  //   imageUrl: '/static/images/products/product_5.png',
  //   updatedAt: subHours(Date.now(), 9)
  // }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Services"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
