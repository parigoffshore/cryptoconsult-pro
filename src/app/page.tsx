'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Activity, TrendingUp, DollarSign } from 'lucide-react';

interface MarketMetrics {
  id: number;
  timestamp: string;
  btc_price: number;
  global_tvl: number;
}

export default function Home() {
  const [metrics, setMetrics] = useState<MarketMetrics[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isMounted, setIsMounted] = useState(false);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/metrics');
      if (!response.ok) throw new Error('Failed to fetch metrics');
      const data = await response.json();
      setMetrics(data);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatTVL = (value: number) => {
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`;
    }
    return formatCurrency(value);
  };

  const latestMetrics = metrics[0];

  return (
    <div className="p-4 md:p-8 w-full max-w-full overflow-hidden">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">Data & Feed Monitoring</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">Real-time market metrics and system status</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <Badge variant="outline" className="border-green-500 text-green-700 whitespace-nowrap">
            <Activity className="mr-1 h-3 w-3" />
            Daemon Python : Actif
          </Badge>
          <span className="text-xs md:text-sm text-gray-500" suppressHydrationWarning>
            Last updated: {isMounted ? lastUpdate.toLocaleTimeString('fr-MU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '--:--:--'}
          </span>
        </div>
        <button
          onClick={fetchMetrics}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#0A0A0A] px-4 py-2 text-sm font-medium text-[#D4AF37] hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Chargement...' : 'Rafraîchir'}
        </button>
      </div>

      {loading && metrics.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-[#D4AF37] flex items-center gap-2">
            <RefreshCw className="h-5 w-5 animate-spin" />
            Chargement des métriques...
          </div>
        </div>
      ) : error ? (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <p className="text-red-700">Erreur de connexion : {error}</p>
          </CardContent>
        </Card>
      ) : latestMetrics ? (
        <>
          <div className="mb-8 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base md:text-lg">
                  <span className="font-semibold text-[#0A0A0A]">Bitcoin Price</span>
                  <DollarSign className="h-5 w-5 text-[#D4AF37]" />
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">Current BTC/USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                  {formatCurrency(latestMetrics.btc_price)}
                </div>
                <div className="mt-2 text-xs md:text-sm text-gray-500" suppressHydrationWarning>
                  Scanned at {isMounted ? new Date(latestMetrics.timestamp).toLocaleString('fr-FR') : '--'}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base md:text-lg">
                  <span className="font-semibold text-[#0A0A0A]">Global TVL</span>
                  <TrendingUp className="h-5 w-5 text-[#D4AF37]" />
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">Total Value Locked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                  {formatTVL(latestMetrics.global_tvl)}
                </div>
                <div className="mt-2 text-xs md:text-sm text-gray-500">
                  Across all DeFi protocols
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base md:text-lg">
                  <span className="font-semibold text-[#0A0A0A]">System Status</span>
                  <Activity className="h-5 w-5 text-green-600" />
                </CardTitle>
                <CardDescription className="text-xs md:text-sm">Infrastructure health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-lg md:text-xl font-bold text-green-700">Synchronisé</span>
                </div>
                <div className="mt-2 text-xs md:text-sm text-gray-500">
                  All systems operational
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="mb-4 text-lg md:text-xl font-semibold text-[#0A0A0A]">Recent Metrics History</h2>
            <div className="space-y-3">
              {metrics.slice(1).map((metric) => (
                <Card key={metric.id} className="border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors bg-white">
                  <CardContent className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-2">
                    <div className="text-xs md:text-sm text-gray-500" suppressHydrationWarning>
                      {isMounted ? new Date(metric.timestamp).toLocaleString('fr-FR') : '--'}
                    </div>
                    <div className="font-medium text-[#0A0A0A] text-sm md:text-base">
                      <span className="text-[#D4AF37] mr-1">BTC:</span> {formatCurrency(metric.btc_price)} 
                      <span className="mx-2 text-gray-300">|</span> 
                      <span className="text-[#D4AF37] mr-1">TVL:</span> {formatTVL(metric.global_tvl)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}