type RentType = 'MONTHLY' | 'JEONSE';

type LookupFormData = {
  rentType?: RentType;
  deposit?: string;
  monthlyRent?: string;
  maintenanceFee?: string;
  monthlyRentPaymentDate?: string;
  checkMaintenanceFee?: boolean;
};
