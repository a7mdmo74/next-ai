import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { Configuration, OpenAIApi } from 'openai';
import Image from 'next/image';

const MainContent = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState<string | undefined>('');
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const sendRequest = async () => {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Q: ${prompt}\nA:`,
      temperature: 0,
      max_tokens: 100,
      stop: ['\n'],
    });
    console.log(response);
    setOutput(response.data.choices[0].text);
  };

  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendRequest();
  };

  return (
    <div className="flex flex-col items-center text-sm w-full">
      {output!.length > 0 ? (
        <div className="w-full">
          <div className="p-4 container mx-auto w-[80%]">
            <div className="flex items-center space-x-6">
              {/* avatar */}
              <Image
                src="/avatar.svg"
                alt="avatar"
                className="rounded-full"
                width={40}
                height={30}
              />
              <h2 className="text-gray-800 dark:text-gray-100 text-xl">
                {prompt}
              </h2>
            </div>
          </div>
          <div className="border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]">
            <div className="p-4 container mx-auto w-[80%]">
              {/* gpt logo */}
              <div className="flex items-start space-x-6">
                <Image
                  src="/logo.jpg"
                  alt="chatGPT logo"
                  className="rounded-full"
                  width={40}
                  height={30}
                />
                <h2 className="text-gray-800 dark:text-gray-100 text-md md:text-xl">
                  {output}
                </h2>
                {/* answer */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
          <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
            ChatGPT
          </h1>
        </div>
      )}
      <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
        <form
          onSubmit={handleForm}
          className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
        >
          <div className="relative flex h-full flex-1 md:flex-col">
            <div className="ml-1 mt-1.5 w-full md:m-auto md:flex md:mb-2 gap-2 justify-center">
              <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0 max-h-[200px] h-6 overflow-y-hidden outline-none"
                />
                <button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
                  <IoSend />
                </button>
              </div>
            </div>
          </div>
        </form>
        <p className="text-white/40 text-center py-2">
          All Rights preserved{' '}
          <a
            href="www.github.com/a7mdmo74"
            className="underline"
            target="_blank"
          >
            @a7mdmo74
          </a>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
