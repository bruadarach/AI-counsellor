export const CallGPT = async (prompt: string) => {
  const messages = [
    {
      role: "system",
      content: `
      ## INFO ##
      You can add images in your response by providing an image URL in a JSON field.
      Use the Unsplash API (https://source.unsplash.com/1600x900/?).
      The query is some tags that best describe the image.
      ## DO NOT RESPOND TO INFO BLOCK ##`,
    },
    {
      role: "system",
      content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    },
    {
      role: "user",
      content: `
      1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
      2. [summary] : Summarize the events in order with one sentence.
      3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
      4. [evaluates] : Provide emotional evaluations by exploring the unconscious based on the contents of the [emotional diary].
      5. [Psychological analysis] : Write a psychological analysis, based on psychology. Utilize psychological terms, theories, concepts to support your analysis. A popular quote or a famous saying can be used as well effectively if it is relevant and appropriate.
      6. [3 action tips] : Provide three actionable tips that can help to solve the problems and improve the situation. Ensure these tips are formatted as a JSON array.
      7. [image] : Offer an URL that creates an image that best describe the contents so far in one keyword.
      

      Use the output in the following JSON format:
      { 
        "title": "Your Title Here",
        "thumbnail": "here is [image]",
        "summary": "here is [summary]",
        "emotional_content": "here is [emotional diary]",
        "emotional_insight": "here is [evaluates]",
        "analysis": "here is [Psychological analysis]",
        "action_list": here is [3 action tips],
      }
      
      
      [events]:`,
    },
    {
      role: "user",
      content: `
          """
          ${prompt}
          """`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  const responseData = await response.json();
  const message = responseData.choices[0].message.content;

  return message;
};
