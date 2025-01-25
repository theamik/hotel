import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Hotel/Calendar';
import Chart from './pages/Chart';
import HotelReport from './pages/Hotel/HotelReport';
import HotelInvoice from './pages/Hotel/HotelInvoice';
import RestaurantInvoice from './pages/RestaurantInvoice';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import Transactions from './pages/Admin/Transaction';
import RestaurantBill from './pages/Restaurant/Bill';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Hotel/Tables';
import Group from './pages/Hotel/Group';
import Guest from './pages/Hotel/Guest';
import RestGuest from './pages/RestGuest';
import Room from './pages/Admin/Room';
import Account from './pages/Admin/Account';
import Menu from './pages/Admin/Menu';
import User from './pages/Admin/User';
import Company from './pages/Hotel/Company';
import Order from './pages/Restaurant/Order';
import Banquet from './pages/Restaurant/Banquet';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Statement from './pages/Report/Statement';
import Ledger from './pages/Report/Ledger';
import Activities from './pages/Report/Activities';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Overview | Soft Mariyam" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/hotel/room-view"
          element={
            <>
              <PageTitle title="Room-view | Soft Mariyam" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/hotel/reservation"
          element={
            <>
              <PageTitle title="Reservation | Soft Mariyam" />
              <Tables />
            </>
          }
        />
        <Route
          path="/hotel/group"
          element={
            <>
              <PageTitle title="Group | Soft Mariyam" />
              <Group />
            </>
          }
        />
        <Route
          path="/hotel/guest"
          element={
            <>
              <PageTitle title="Guest | Soft Mariyam" />
              <Guest />
            </>
          }
        />
        <Route
          path="/hotel/company"
          element={
            <>
              <PageTitle title="Company | Soft Mariyam" />
              <Company />
            </>
          }
        />
        <Route
          path="/hotel/report"
          element={
            <>
              <PageTitle title="Hotel Report | Soft Mariyam" />
              <HotelReport />
            </>
          }
        />
        <Route
          path="/hotel/invoice"
          element={
            <>
              <PageTitle title="Hotel Invoice | Soft Mariyam" />
              <HotelInvoice />
            </>
          }
        />
        <Route
          path="/restaurant/bill"
          element={
            <>
              <PageTitle title="Restaurant Bill | Soft Mariyam" />
              <RestaurantBill />
            </>
          }
        />
        <Route
          path="/restaurant/order"
          element={
            <>
              <PageTitle title="Restaurant Order | Soft Mariyam" />
              <Order />
            </>
          }
        />
        <Route
          path="/restaurant/banquet"
          element={
            <>
              <PageTitle title="Restaurant Banquet | Soft Mariyam" />
              <Banquet />
            </>
          }
        />
        <Route
          path="/restaurant/guest"
          element={
            <>
              <PageTitle title="Restaurant Guest | Soft Mariyam" />
              <RestGuest />
            </>
          }
        />
        <Route
          path="/restaurant/invoice"
          element={
            <>
              <PageTitle title="Restaurant Invoice | Soft Mariyam" />
              <RestaurantInvoice />
            </>
          }
        />
        <Route
          path="/admin/transactions"
          element={
            <>
              <PageTitle title="Transaction | Soft Mariyam" />
              <Transactions />
            </>
          }
        />
        <Route
          path="/admin/accounts"
          element={
            <>
              <PageTitle title="Account | Soft Mariyam" />
              <Account />
            </>
          }
        />
        <Route
          path="/admin/room"
          element={
            <>
              <PageTitle title="Room | Soft Mariyam" />
              <Room />
            </>
          }
        />
        <Route
          path="/admin/menu"
          element={
            <>
              <PageTitle title="Menu | Soft Mariyam" />
              <Menu />
            </>
          }
        />
        <Route
          path="/admin/user"
          element={
            <>
              <PageTitle title="User | Soft Mariyam" />
              <User />
            </>
          }
        />
        <Route
          path="/report/statement"
          element={
            <>
              <PageTitle title="Statement | Soft Mariyam" />
              <Statement />
            </>
          }
        />
        <Route
          path="/report/ledger"
          element={
            <>
              <PageTitle title="Ledger | Soft Mariyam" />
              <Ledger />
            </>
          }
        />
        <Route
          path="/report/activities"
          element={
            <>
              <PageTitle title="Activities | Soft Mariyam" />
              <Activities />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Soft Mariyam" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Soft Mariyam" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Soft Mariyam" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Soft Mariyam" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Soft Mariyam" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Soft Mariyam" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
