import Script from 'next/script'

export function formEvent() {
  return (
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        function() {
          dataLayer.push({
            event: "formSubmit"
          })
        }
      `}
    </Script>
  )
}
