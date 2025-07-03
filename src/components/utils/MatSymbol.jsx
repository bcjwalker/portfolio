import useFontFaceObserver from 'use-font-face-observer';

// A lovely little font loader that prevents god-awful Material Symbols font pop in
export default function MatSymbol(props) {
  let symbolFamily;

  if (props.type == 'material-symbols-rounded') {
    symbolFamily = 'Material Symbols Rounded';
  } else if (props.type == 'material-symbols-sharp') {
    symbolFamily = 'Material Symbols Sharp';
  }

  // Check if font is loaded w/ test icon
  const isFontLoaded = useFontFaceObserver(
    [{ family: symbolFamily }],
    {
      testString: props.icon,
      // timeout: 5000,
    },
    {
      showErrors: true,
    },
  );

  // useEffect(() => {
  //   console.log("Is font loaded?", isFontLoaded);
  // }, [isFontLoaded]);

  // If font is not loaded yet, display symbol skeleton as placeholder 
  return (
    <>
    {isFontLoaded ? 
      <span className={`${props.type} ${props.classes}`}> {props.icon} </span> : 
      <span className="material-symbols-skeleton"/> }
    </>
  );
}