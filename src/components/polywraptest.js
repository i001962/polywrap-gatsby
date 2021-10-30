import React from 'react';
import { useWeb3ApiQuery } from '@web3api/react';

export const PolywrapTest = () => {
  const [message, setMessage] = React.useState('');

  const query = {
    uri: 'ens/helloworld.web3api.eth',
    query: `query { 
        logMessage(
            message: "${message}"
        )
     }`,
  };

  const { execute } = useWeb3ApiQuery(query);


  const logMsgHandler = async (event) => {
    event.preventDefault();
    console.info(`Sending Query: ${JSON.stringify(query, null, 2)}`);
    const result = await execute();
    console.info(`Query Result: ${JSON.stringify(result, null, 2)}`);
  };

  const onChangeHandler = (event) => {
    setMessage(event?.target.value);
  };

  return (
    <>
      <div >
        <div >"Hello World" from Polywrap!</div>
        <div>
          <strong>Test the "Hello World" Polywrapper by:</strong>
          <br />
          1. typing into the input below
          <br />
          2. clicking the submit button
          <br />
          3. viewing the output in{' '}
          <a
            href='https://webmasters.stackexchange.com/a/77337'
            target='_blank'
          >
            the console
          </a>
          <br />
        </div>
        <br />
        <form
          onSubmit={(event) => logMsgHandler(event)}
        >
          <input
            onChange={(event) => onChangeHandler(event)}
          />
          <button type='submit' >
            Submit
          </button>
        </form>
        <div >
          Want to build your own Polywrapper?
          <br />
          <a
            href='https://docs.polywrap.io/'
            target='_blank'
          >
            Check out our documentation
          </a>
        </div>
      </div>
    </>
  );
};