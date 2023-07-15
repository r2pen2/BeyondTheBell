import React, { useContext, useState } from 'react'

import { Text, } from "@nextui-org/react";

import "../assets/style/services.css"
import { PageHeader, } from '../components/Bar';
import { CurrentUserContext, serverURL } from '../App';
import { WLText } from '../libraries/Web-Legos/components/Text';
import { WLCenteredColumn, WLLoading, WLSpinnerPage } from '../libraries/Web-Legos/components/Layout';
import { WLImage } from '../libraries/Web-Legos/components/Images';

export default function ThankYou() {

  const {currentUser} = useContext(CurrentUserContext)

  const [thankYouTextLoaded, setThankYouTextLoaded] = useState(false);

  const userCanEditText = currentUser ? currentUser.op : false;


  return (
    <WLSpinnerPage itemsCentered dependencies={[thankYouTextLoaded]}>
      <PageHeader text="Thank You" />
      <section className="d-flex flex-column align-items-center justify-content-center m-5 gap-2">
        <WLText firestoreId="thank-you" editable={userCanEditText} setLoaded={setThankYouTextLoaded}/>
        <WLImage editable={userCanEditText} firestoreId="thank-you" shadow />
      </section>
    </WLSpinnerPage>
  )
}