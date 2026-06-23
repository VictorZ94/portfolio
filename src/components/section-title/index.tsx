// @Components
import Typography from "@mui/material/Typography";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#fff',
        p: 2,
        mb: 3,
        bgcolor: 'primary.main',
      }}
    >
      {text}
    </Typography>
  );
};

export default SectionTitle;