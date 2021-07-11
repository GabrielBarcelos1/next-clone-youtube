import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hiden',
    width: '100vw',
  },
}));

export default function Layout({ children, title }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" />
      </Head>
      <div className={classes.root}>
        <div>topbar</div>
        <div>navbar</div>
        <div>{children}</div>
      </div>
    </>
  );
}
