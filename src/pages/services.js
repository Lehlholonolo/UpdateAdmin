import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { services } from '../__mocks__/services';
import { ServiceListToolbar } from '../components/service/service-list-toolbar';
import { ServiceCard } from '../components/service/service-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Service Providers | Planera
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ServiceListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {services.map((service) => (
              <Grid
                item
                key={service.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
