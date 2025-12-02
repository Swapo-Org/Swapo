import Button from '@/components/ui/Button';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '@/utils/axiosInstance';
import { useToast } from '@/hooks/useToast';

interface TradeDetail {
  skill_offered_name: string;
  skill_offered_desc: string;
  skill_desired_name: string;
  skill_desired_desc: string;
  proposer: {
    user_id: number;
    email: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    profile_picture_url?: string;
  };
  message?: string;
}

const TradeDetails = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { tradeId } = useParams<{ tradeId: string }>();
  const [trade, setTrade] = useState<TradeDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrade = async () => {
      if (!tradeId) return;
      try {
        const res = await axios.get(`/trades/${tradeId}/`);
        setTrade(res.data);
      } catch (err: any) {
        console.error('Failed to fetch trade:', err);
        showToast('Failed to fetch trade details', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchTrade();
  }, [tradeId]);

  if (loading) return <p className="p-10 text-center">Loading trade...</p>;
  if (!trade) return <p className="p-10 text-center">Trade not found.</p>;

  const proposer = trade.proposer;

  return (
    <div className="mx-auto my-2 flex min-h-screen max-w-xl flex-col pb-17">
      {/* Header */}
      <div className="relative flex items-center justify-center border-b-2 border-gray-200 pt-2 pb-4">
        <ChevronLeft
          size={28}
          className="absolute left-2 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="text-center">
          <h1 className="text-xl font-bold">Trade Details</h1>
        </div>
      </div>

      <div className="space-y-4 bg-stone-50/50 px-4 pt-4">
        {/* Skills */}
        <div className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md hover:bg-gray-50">
          <div className="w-[65.5%] text-left">
            <h2 className="my-3 text-[20px] font-bold text-gray-900">
              Skill Offered
            </h2>
            <p className="text-sm font-medium text-red-800">
              {trade.skill_offered_name}
            </p>
            <p className="mb-3 text-lg font-bold">{trade.skill_offered_desc}</p>
          </div>
          <div className="rounded-xl border-transparent bg-stone-100 p-4 shadow-sm">
            <img
              src={
                proposer.profile_picture_url ||
                'https://img.icons8.com/office/40/person-male.png'
              }
              alt="Skill Thumbnail"
              className="h-25 w-25 rounded-full"
            />
          </div>
        </div>

        <div className="flex cursor-pointer items-center justify-between rounded-lg bg-white p-4 shadow-md hover:bg-gray-50">
          <div className="w-[65.5%] text-left">
            <h2 className="my-3 text-[20px] font-bold text-gray-900">
              Skill Desired
            </h2>
            <p className="text-sm font-medium text-red-800">
              {trade.skill_desired_name}
            </p>
            <p className="mb-3 text-lg font-bold">{trade.skill_desired_desc}</p>
          </div>
        </div>

        {/* Message */}
        {trade.message && (
          <div className="rounded-lg bg-white p-4 text-left shadow-md hover:bg-gray-50">
            <h2 className="text-[20px] font-bold text-gray-900">
              Message from Trader
            </h2>
            <p className="mt-2 text-sm text-gray-500">{trade.message}</p>
          </div>
        )}

        {/* About Trader */}
        <div className="mb-10 rounded-lg bg-white p-4 shadow-md hover:bg-gray-50">
          <div className="text-left">
            <span className="text-lg font-bold text-gray-900">
              About the Trader
            </span>
          </div>
          <div className="mt-4 mb-2 flex items-center space-x-4 text-left">
            <img
              src={
                proposer.profile_picture_url ||
                'https://img.icons8.com/office/40/person-male.png'
              }
              alt="Trader"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <p className="font-bold">
                {proposer.first_name && proposer.last_name
                  ? `${proposer.first_name} ${proposer.last_name}`
                  : proposer.email}
              </p>
              <p className="font-medium text-red-800">
                {proposer.role || 'N/A'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={() =>
              navigate(`/app/dashboard/propose-trade`, {
                state: { listing: trade },
              })
            }
          >
            Propose Trade
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/app/dashboard/messages')}
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradeDetails;
