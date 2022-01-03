import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function RoadMap() {
  return (
    <Box
      my={15}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "semibold", textAlign: "center" }}
        component="h2"
        gutterBottom
      >
        Our Roadmap
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ maxWidth: "fit-content" }}
            color="primary"
          >
            Q1
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ul>
              <li>
                Founders of TICK meet to confirm ideas around decentralized
                travel platform
              </li>
              <li>Token is tested and ready for release</li>
              <li>Whitepaper both available in both English and Chinese</li>
              <li>Sale website optimized</li>
              <li>
                Web platform and application designed around user accessibility
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ maxWidth: "fit-content" }}
            color="primary"
          >
            Q2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ul>
              <li>
                Listing TICK token on exchanges (Approximately 3-month after
                Main-sale concludes)
              </li>
              <li>
                Integration of platform in line with blockchain including flat
                and cryptocurrency payment methods
              </li>
              <li>
                Peer-to-Peer chat option and amalgamation of AI-based dispute
                system development
              </li>
              <li>Beta testing</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ maxWidth: "fit-content" }}
            color="primary"
          >
            Q3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <ul>
              <li>Listing TICK token on exchanges 2</li>
              <li>Integration of platform in blockchain complete</li>
              <li>Beta testing</li>
            </ul>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
