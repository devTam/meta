import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Grid my={15} container spacing={5}>
      <Grid item xs={12} md={4}>
        <Typography variant="h4" sx={{ fontWeight: "semibold" }} component="h2">
          Frequently asked questions
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Crypto Ninja token</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              We accept access as a startup to venture capital is hard, it takes
              and costs money for a startup. A decentralized, distributed
              Blockchain system providing businesses and developers with a low
              cost Merchants, users, friends.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Do we already have an application?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              Our product solves crucial problems of such giant services as
              Foursquare & Swarm, Groupon, and Tripadvisor. Millenial travelers
              don't possess any more countless hours for preparing the trip
              itinerary (reading Tripadvisor). Business travellers, in
              particular, complain they are having maximum 2 to 5 free hours
              during their work trips, which they don't want to spend on
              researching what is worth doing around.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Why blockchain?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              Blockchain helps in the verification and traceability of multistep
              transactions needing verification and traceability. It can provide
              secure transactions, reduce compliance costs, and speed up data
              transfer processing
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is blockchain technology?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              The technology uses decentralized consensus to maintain the
              network, which means it is not centrally controlled by a bank,
              corporation, or government. In fact, the larger the network grows
              and becomes increasingly decentralized, the more secure it
              becomes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How can I look up a transaction on the blockchain?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              Block Explorers provide a visually appealing and intuitive way to
              navigate a cryptocurrency's blockchain. Our Block Explorer
              launched in August 2011. It began as a way for anyone to study
              bitcoin transactions, along with a variety of helpful charts and
              statistics about activity on the network.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "#1e202c", color: "#fff" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How do I backup my ether wallet?</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#e85d37", color: "#fff" }}>
            <Typography sx={{ fontWeight: "light" }} variant="subtitle2">
              If you haven’t yet backed up your wallet, head over to the
              Security section of your wallet to do it now. Your backup phrase
              acts as a failsafe, ensuring that you can always access your
              funds. This guide can walk you through the process.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default FAQ;
