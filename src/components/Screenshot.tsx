import { Box, Typography } from '@mui/material';
import type { Shot } from '../data/projects';
import { metaSx } from '../styles';
import { useLanguage } from '../context/useLanguage';

interface ScreenshotProps {
  shot: Shot;
  host?: string;
  showCaption?: boolean;
  eager?: boolean;
  /** Crop to a fixed aspect ratio (e.g. to line up cards). Defaults to the image's own shape. */
  ratio?: string;
}

const PLACEHOLDER_RATIO = '16 / 10';

/** A screenshot in a quiet browser frame, or a labelled placeholder until one exists. */
export function Screenshot({ shot, host, showCaption = true, eager = false, ratio }: ScreenshotProps) {
  const { locale, t } = useLanguage();
  const alt = shot.alt[locale];
  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Box
        sx={{
          border: '1px solid var(--line)',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'var(--bg-flare)',
          boxShadow: '0 18px 40px -28px rgba(0, 0, 0, 0.45)',
        }}
      >
        <Box
          aria-hidden
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            height: 28,
            px: 1.5,
            borderBottom: '1px solid var(--line)',
          }}
        >
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--line)' }}
            />
          ))}
          {host && (
            <Box component="span" sx={{ ...metaSx, fontSize: '0.75rem', ml: 1.5 }}>
              {host}
            </Box>
          )}
        </Box>

        {shot.src ? (
          <Box
            component="img"
            src={shot.src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              ...(ratio && { aspectRatio: ratio, objectFit: 'cover', objectPosition: 'top' }),
            }}
          />
        ) : (
          <Box
            role="img"
            aria-label={t.screenshot.toComeLabel(alt)}
            sx={{
              aspectRatio: ratio ?? PLACEHOLDER_RATIO,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              p: 2,
              textAlign: 'center',
              backgroundColor: 'var(--bg-shade)',
              backgroundImage:
                'repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 14px)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-display)',
                fontStretch: '110%',
                fontWeight: 600,
                px: 1,
                backgroundColor: 'var(--bg-shade)',
              }}
            >
              {t.screenshot.toCome}
            </Typography>
            <Typography
              sx={{
                ...metaSx,
                fontSize: '0.75rem',
                px: 1,
                backgroundColor: 'var(--bg-shade)',
                overflowWrap: 'anywhere',
              }}
            >
              {shot.file}
            </Typography>
          </Box>
        )}
      </Box>

      {showCaption && (
        <Typography component="figcaption" sx={{ ...metaSx, mt: 1.25 }}>
          {shot.caption[locale]}
        </Typography>
      )}
    </Box>
  );
}
