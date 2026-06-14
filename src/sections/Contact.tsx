import { Box, Typography, Container, Paper, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '../theme';

export function Contact() {
  const { colorScheme } = useTheme();

  const contacts = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'zrvictor00@gmail.com',
      href: 'mailto:zrvictor00@gmail.com',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'Victor Zuluaga',
      href: 'https://linkedin.com',
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      value: 'victorz94',
      href: 'https://github.com',
    },
  ];

  return (
    <Box id="contact" component="section" sx={{ mb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            textTransform: 'uppercase',
            color: colorScheme.primary,
            mb: 3,
            letterSpacing: '0.05em',
          }}
        >
          Contact
        </Typography>
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: colorScheme.surface,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '1rem',
              color: colorScheme.text,
              mb: 4,
            }}
          >
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Button
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Icon />}
                  sx={{
                    bgcolor: colorScheme.primary,
                    color: '#FFFFFF',
                    px: 3,
                    py: 1.5,
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: colorScheme.secondary,
                    },
                  }}
                >
                  {contact.label}
                </Button>
              );
            })}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
