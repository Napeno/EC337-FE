import { IonCol, IonGrid, IonModal, IonRow, IonSearchbar } from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { useState } from "react";
import { BottomSheetContent } from "./BottomSheetContent";
import { DummyItem } from "./DummyItem";

interface BottomSheetProps {
  isOpen: boolean;
  close: (event: CustomEvent<OverlayEventDetail<any>>) => void;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, close }) => {
  const amountOfDummyItems = 10;
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={close}
      breakpoints={[0, 0.12, 0.5, 1]}
      initialBreakpoint={0.12}
      backdropBreakpoint={0.5}
    >
      <IonGrid className="ion-padding-top">
        <IonRow>
          <IonCol size="12">
            <IonSearchbar
              animated
              value={search}
              onIonInput={handleChange}  // Thay đổi onIonChange thành onIonInput
              debounce={0} // Không có độ trễ để có phản hồi nhanh hơn
              placeholder="Search by item number"
            />
          </IonCol>
        </IonRow>

        {/* Kiểm tra nội dung bên trong BottomSheetContent */}
        <BottomSheetContent>
          {[
            ...Array(amountOfDummyItems),
          ].map((_, i) => {
            if (search === "" || search.includes(i.toString())) {
              return <DummyItem key={i} number={i} />;
            }
            return null; // Thay vì trả về "", trả về null nếu không có mục nào
          })}
        </BottomSheetContent>
      </IonGrid>
    </IonModal>
  );
};
