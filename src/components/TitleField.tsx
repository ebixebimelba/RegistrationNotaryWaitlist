export default function TitleField(props: TitleFieldProps) {
  return (
    <div
      className={`h-16 absolute text-left font-normal w-[452px] top-[498px] left-[calc(50%_-_226px_+_-335px)] font-['Poppins']`}
    >
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] inset-x-0 h-10 top-6 absolute bg-white rounded"
       />
      <p
        className="inset-x-4 h-6 top-8 absolute text-sm inline m-0 w-[420px] leading-[normal] text-[rgba(179,182,197,1)]"
      >
        Enter your email
      </p>
      <div
        className="h-4 absolute left-0 top-0 leading-none inline-block w-[452px]"
      >
        <p className="text-sm text-black inline m-0 leading-[normal]">
          Email
        </p>
        <p
          className="text-sm inline m-0 leading-[normal] text-[rgba(248,82,85,1)]"
        >
          *
        </p>
      </div>
    </div>
  );
}

TitleField.defaultProps = {};

interface TitleFieldProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
